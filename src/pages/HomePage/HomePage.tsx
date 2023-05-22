import * as React from 'react';
import './HomePage.css';

import { Banner } from '../../components/Banner/Banner';
import { ListItem } from '../../components/ListItem/ListItem';
import { Container } from '../../components/Container/Container';
import { Row } from '../../components/Row/Row';
import { List } from '../../components/List/List';

import { Link } from 'react-router-dom';

const listItems = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ut.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ut.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ut.',
];

export const HomePage = () => {
  return (
    <div className="HomePage">
      <Container className={'HomePage__container'}>
        <Row>
          <Banner />
        </Row>
        <Row>
          <List>
            {listItems.map((item, index) => (
              <ListItem key={index} num={index + 1} text={item} />
            ))}
          </List>
        </Row>
        <Row>
          <li>
            <Link to="/test">test</Link>
          </li>
        </Row>
      </Container>
    </div>
  );
};
