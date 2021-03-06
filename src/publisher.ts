import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/TickerCreatedPublisher';
import {} from './events/TicketCreatedEvent';

console.clear();

// stan is just nats backwords
const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Publisher connected to NATS');

  const publisher = new TicketCreatedPublisher(stan);
  publisher.publish({
    id: '123',
    title: 'concert',
    price: 20,
  });
});
