Running Native concat first, then lodash concat

| Test | Native Concat | Lodash Concat | Differences |
| :--: | :-----------: | :-----------: | :---------: |
|  1   |    0.318ms    |  0.179ms ✅   |   0.139ms   |
|  2   |  0.097ms ✅   |    0.16ms     |  -0.063ms   |
|  3   |  0.094ms ✅   |    0.159ms    |  -0.065ms   |
|  4   |  0.094ms ✅   |    0.16ms     |  -0.066ms   |
|  5   |   0.09ms ✅   |    0.158ms    |  -0.068ms   |

---

Running Lodash concat first and then native concat.

| Test | Native Concat | Lodash Concat | Differences |
| :--: | :-----------: | :-----------: | :---------: |
|  1   |    0.525ms    |  0.009ms ✅   |   0.516ms   |
|  2   |    0.237ms    |  0.008ms ✅   |   0.229ms   |
|  3   |    0.247ms    |  0.008ms ✅   |   0.239ms   |
|  4   |    0.259ms    |  0.008ms ✅   |   0.251ms   |
|  5   |    0.25ms     |  0.008ms ✅   |   0.242ms   |
