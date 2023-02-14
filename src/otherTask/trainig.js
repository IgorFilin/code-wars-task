const data = [
    {
        name: 'art',
        type: '1',
    },
    {
        name: 'art2',
        type: '2',
    },
    {
        name: 'art2',
        type: '3',
    },
    {
        name: 'art3',
        type: '1',
    },
    {
        name: 'art4',
        type: '2',
    },
    {
        name: 'art5',
        type: '3',
    },
];

const newObj = data.reduce((acc,curr,i)=> {
      acc[curr.type].push(curr)
}, {
    '1': [],
    '2': [],
    '3': []
})





const res = {
    "1": [{}]
     "2":
     "3":
}