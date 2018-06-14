# fake-random-data

* Creating a fake JSON data
* Generate sample JSON output from JSON Schema

## install

### npm
```javascript
npm install fake-random-data
```

### yarn
```javascript
yarn add fake-random-data
```

## Example usage
```javascript
import FakeRandomData * 'fake-random-data';

const sampleObj = {
  a: '{{int,0,100}}',
  b: '{{float,0,100}}',
  c: '{{boolean}}',
  d: '{{string,0,10}}',
  inner: {
    e: '{{int,0,100}}'
  }
}

const fake = FakeRandomData();
fake.create( sampleObj );

// result
// {
//   a: 14,
//   b: 32.233938383,
//   c: false,
//   d: 'pifnehfjme',
//   inner: {
//     e: 30
//   }
// }
```

## API

* Generate random number between 0 and 100
```javascript
'{{int,0,100}}' // 20
```

* Generating a random number with decimals
```javascript
'{{float,0,100}}' // 32.33322233
```

* Generate random boolean
```javascript
'{{boolean}}' // true
```

* Generate a random string with A-Z,a-z and 0-9
```javascript
'{{string,10}}' // 'aEj3l4j3j2'
```
