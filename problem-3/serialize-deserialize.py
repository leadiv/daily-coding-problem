import unittest

import sys
sys.path.append('/usr/src')

from node import Node
from deserialize import deserialize
from serialize import serialize



class SerializeDeserialize(unittest.TestCase):

    def test_serialize_root_only(self):
        nodetree = Node('root')

        self.assertEqual(serialize(nodetree), '{"root": "root"}')

    def test_serialize_simple_root_left_only(self):
        nodetree = Node('root', 'left')

        self.assertEqual(serialize(nodetree), '{"root": "root", "left": "left"}')

    def test_serialize_simple_root_right_only(self):
        nodetree = Node('root', None, 'right')

        self.assertEqual(serialize(nodetree), '{"root": "root", "right": "right"}')

    def test_handle_colon(self):
        nodetree = Node('root:')

        self.assertEqal(serialize(nodetree), '(root:::)')

    @unittest.skip('skipit')
    def test_serialize(self):
        nodetree = Node('root', Node('left', Node('left.left')), Node('right'))

        self.assertEqual(serialize(nodetree), '(root (left left.left) (right))')


    @unittest.skip('skipit')
    def test_deserialize(self):
        nodetreeString = '(root (left left.left) (right))'

        self.assertEqual(deserialize(nodetreeString).left.left.val, 'left.left')


    @unittest.skip('skipit')
    def test_serialdeserial(self):
        nodetree = Node('root', Node('left', Node('left.left')), Node('right'))

        self.assertEqual(deserialize(serialize(nodetree)).left.left.val, 'left.left')

if __name__ == '__main__':
    unittest.main()
