const chars = {
  '1': 'e',
  '8': 'r',
  '11': '!',
  '4': 'o',
  '0': 'H',
  '10': 'd',
  '6': 'W',
  '9': 'l',
  '2': 'l',
  '7': 'o',
  '3': 'l',
  length: 12
}

let msg = ''
for(let i = 0; i < chars.length; i++) {
  if (chars[i])
	msg = msg + chars[i]
  else
	msg = msg + ' '
}

console.log(msg)

// this application create a dictionary that stores characters at specified index positions
// it then instantiates an variable that will be able to hold a combination of characters, feed the character into that variable through a variable loop which pick character starting from position 0, incrementing by one
// at the end tho formed combination of characters is printed