# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        self.ans = []
        self.postorderTraversalHelper(root)
        return self.ans
        
        
    def postorderTraversalHelper(self,root):
        if root:
            self.postorderTraversalHelper(root.left)
            self.postorderTraversalHelper(root.right)
            self.ans.append(root.val)
            
        