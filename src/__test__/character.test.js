import { Character } from '../js/Character';
import { Bowman } from '../js/Bowman';
import { Daemon } from '../js/Daemon';
import { Magician } from '../js/Magician';
import { Swordsman } from '../js/Swordsman';
import { Undead } from '../js/Undead';
import { Zombie } from '../js/Zombie';

test('Должен выдать ошибку, если указано неверное имя', () => {
  expect(() => {
    new Character('J', 'Bowman');
  }).toThrow('Имя должно содержать от 2 до 10 символов');
});


test('Должен выдать ошибку, если указан неверный тип', () => {
  expect(() => {
    new Character('Mike', 'InvalidType');
  }).toThrow('Недопустимый тип персонажа');
});

test('Должен создать объект класса Bowman с правильными свойствами', () => {
  const bowman = new Bowman('Gleb');

  expect(bowman.name).toBe('Gleb');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});

test('Должен создать объект класса Daemon с правильными свойствами', () => {
  const daemon = new Daemon('Oleg');

  expect(daemon.name).toBe('Oleg');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.health).toBe(100);
  expect(daemon.level).toBe(1);
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);
});

test('Должен создать объект класса Magician с правильными свойствами', () => {
  const magician = new Magician('Pavel');

  expect(magician.name).toBe('Pavel');
  expect(magician.type).toBe('Magician');
  expect(magician.health).toBe(100);
  expect(magician.level).toBe(1);
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('Должен создать объект класса Swordsman с правильными свойствами', () => {
  const swordsman = new Swordsman('Andrey');

  expect(swordsman.name).toBe('Andrey');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.health).toBe(100);
  expect(swordsman.level).toBe(1);
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test('Должен создать объект класса Undead с правильными свойствами', () => {
  const undead = new Undead('Maxim');

  expect(undead.name).toBe('Maxim');
  expect(undead.type).toBe('Undead');
  expect(undead.health).toBe(100);
  expect(undead.level).toBe(1);
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});

test('Должен создать объект класса Zombie с правильными свойствами', () => {
  const zombie = new Zombie('Alexey');

  expect(zombie.name).toBe('Alexey');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.health).toBe(100);
  expect(zombie.level).toBe(1);
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});