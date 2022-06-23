interface Person {
  firstName: string;
  lastName: string;
  age: number;
  size: {
    height: number;
    weight: number;
  };
}

interface Animal {
  name: string;
  age: number;
  size: {
    height: number;
    weight: number;
  };
}

// Union Types

type Creature = Person | Animal;

function greet(creature: Creature) {
  if (isPerson(creature)) {
    return `Hello, ${creature.firstName} ${creature.lastName}!`;
  }
  return `Hello, ${creature.name}!`;
}

function isPerson(creature: Creature): creature is Person {
  return "firstName" in creature && "lastName" in creature;
}

// Intersection Types
type Alien = Person & Animal;

// Pick
type Appearance = Pick<Person, "size" | "age">;

// Omit
type Fly = Omit<Animal, "size">;

// Partial
type NewPersion = Partial<Person>;

// Record
type Enclosures = Record<number, Animal["name"]>;
