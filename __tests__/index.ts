import { topoSort } from '../src/index'
const graph = [
  {
    id: 'A',
    edges: ['B', 'C'],
  },
  {
    id: 'B',
    edges: [],
  },
  {
    id: 'C',
    edges: [],
  }]

const expected = ['C', 'B', 'A']

describe('topoSort', () => {
  it('should sort a simple graph', () => {
    expect(topoSort(graph)).toEqual(expected)  
  });
});