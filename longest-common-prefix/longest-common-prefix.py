class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        commonPrefix = strs.pop(-1)
        for word in strs:
            for i in range(len(commonPrefix)):
                if i >= len(word):
                    commonPrefix = commonPrefix[:i]
                    break
                if commonPrefix[i] != word[i]:
                    commonPrefix = commonPrefix[:i]
                    break
        return commonPrefix
        