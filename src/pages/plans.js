// @flow
import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { maybeGetCached, fetchAndCacheJson } from '../utils/fetch';
import Async from '../components/Async';
import md from '../utils/markdown';
import Title from '../components/Title';

const LABEL_COLORS = {
  blue: '#0079BF',
  green: '#61BD4F',
  lime: '#51E898',
  yellow: '#F2D600',
  orange: '#FFAB4A',
  red: '#EB5A46',
  purple: '#C377E0',
};

const Label = styled.span`
  display: inline-block;
  font-size: 0.8em;
  background: ${props => LABEL_COLORS[props.color] || props.color};
  padding: 0.2em 0.6em;
  color: white;
  margin-right: 0.5em;
`;

const CardLink = styled.a`
  display: block;
  vertical-align: top;
  color: inherit;
  text-decoration: none;
  padding: 1rem;
  margin-bottom: 0.4rem;
  background: white;

  & *:last-child {
    margin-bottom: 0;
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.6rem;
`;

const CardDescription = styled.p`
  margin-top: 0.6rem;
`;

function Card(props) {
  return (
    <CardLink href={props.card.url} key={props.card.id}>
      <CardTitle>{props.card.name}</CardTitle>
      {props.card.labels.map(label => (
        <Label key={label.id} color={label.color}>
          {label.name}
        </Label>
      ))}
      {props.card.desc && (
        <CardDescription
          dangerouslySetInnerHTML={{ __html: md(props.card.desc) }}
        />
      )}
    </CardLink>
  );
}

const CardsContainer = styled.div``;

function Cards(props) {
  return (
    <CardsContainer>
      {props.cards.map(card => <Card key={card.id} card={card} />)}
    </CardsContainer>
  );
}

const ListContainer = styled.div`
  background: #eee;
  padding: 1.4rem;
  margin-bottom: 1.4rem;

  & *:last-child {
    margin-bottom: 0;
  }
`;

const ListHeading = styled.h2`
  font-size: 4rem;
`;

function List(props) {
  return (
    <ListContainer key={props.list.id}>
      <ListHeading>{props.list.name}</ListHeading>
      <Cards
        cards={props.cards.filter(card => card.idList === props.list.id)}
      />
    </ListContainer>
  );
}

function Lists(props) {
  return (
    <div>
      {props.lists.map(list => {
        return <List key={list.id} list={list} cards={props.cards} />;
      })}
    </div>
  );
}

const BoardContainer = styled.div`
  position: relative;
`;

const BoardCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const BoardMessage = styled.p`
  position: fixed;
  display: inline-block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 1rem 2rem;
  -webkit-font-smoothing: antialiased;
`;

type Data = {
  lists: Array<{
    id: string,
    name: string,
  }>,
  cards: Array<{
    id: string,
    idList: string,
    url: string,
    name: string,
    desc?: string,
    labels: Array<{
      id: string,
      name: string,
      color: $Keys<typeof LABEL_COLORS>,
    }>,
  }>,
};

const LISTS_URL = 'https://api.trello.com/1/boards/6HO4yHKP/lists';
const CARDS_URL = 'https://api.trello.com/1/boards/6HO4yHKP/cards';

async function fetchData(): Promise<Data> {
  let [lists, cards] = await Promise.all([
    fetchAndCacheJson(LISTS_URL),
    fetchAndCacheJson(CARDS_URL),
  ]);
  return { lists, cards };
}

function getCached(): Data | null {
  let lists = maybeGetCached(LISTS_URL);
  let cards = maybeGetCached(CARDS_URL);
  if (lists && cards) return { lists, cards };
  return null;
}

function Board() {
  return (
    <Async fetch={fetchData} cached={getCached()}>
      {state => {
        if (state.data) {
          return (
            <BoardContainer>
              {state.loading && (
                <BoardCover>
                  <BoardMessage>Refreshing...</BoardMessage>
                </BoardCover>
              )}
              <Lists lists={state.data.lists} cards={state.data.cards} />
            </BoardContainer>
          );
        } else if (state.loading) {
          return <h3>Loading...</h3>;
        } else {
          return (
            <div>
              <h3>An unexpected error occured</h3>
              {state.error && <pre>{state.error.toString()}</pre>}
            </div>
          );
        }
      }}
    </Async>
  );
}

export default function Plans() {
  return (
    <div>
      <Title>Plans</Title>
      <Board />
    </div>
  );
}
