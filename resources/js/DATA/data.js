import { faker } from '@faker-js/faker';


export function createRandomUser(){
  return {
    userId: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    application: faker.number.int(1000),
    registeredAt: faker.date.past(),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 40,
});
