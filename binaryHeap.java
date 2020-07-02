insert(1)
insert(13)
insert(4)
insert(0)
insert(10)


// we have to maintain the heap variant satisfied
// min or max
// if new heap added is going against invariant, will have to bubble up until you cant. 
// bubble up by switching to the parent node

// Removing elements from binary heaps ****

// poll is moving element at the root
// polling first by swiching last element to the root element
// then the top elements need to bubble down
// bubble down always to the lower value node between the two
// set bubble down to the left in case there's a tie, 
// do it until heap invariant satisfied

// remove(12)
// go thru the array until find 12
// mark the node and swap with the last node in tree
// remove the 12, check if there's invariant
// then move the replaced node bubble up until you get the invariant satisfied



poll()
remove(12)
remove(3)
poll()
remove(6)
