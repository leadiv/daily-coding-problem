def serialize(tree):

    if tree.left == None and tree.right == None:
        return "".join(['{"root": "', tree.val, '"}'])

    if tree.right == None:
        return "".join(['(', tree.val, ' ', tree.left, ')'])
