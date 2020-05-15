import { assertEquals } from '../tests.js'

console.log('\n\n\n\n\n\n\n\n\nTESTES:');

assertEquals(getEquivalent("C#"), "Db")
assertEquals(getEquivalent("Db"), "C#")
assertEquals(getEquivalent("D#"), "Eb")
assertEquals(getEquivalent("Eb"), "D#")
assertEquals(getEquivalent("F#"), "Gb")
assertEquals(getEquivalent("Gb"), "F#")
assertEquals(getEquivalent("G#"), "Ab")
assertEquals(getEquivalent("Ab"), "G#")
assertEquals(getEquivalent("A#"), "Bb")
assertEquals(getEquivalent("Bb"), "A#")