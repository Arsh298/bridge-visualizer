function recursion(i, river, hd, n, animations, curr, ans) {
    if(i == n-1)
    {
        if(ans.len > curr.len) {
            ans = {arr: [...curr.arr], len: curr.len};
        }
        animations.push([[...curr.arr], curr.len, ans.len]);
    } else {
        curr.len += river[i];
        curr.arr.push(i);
        for(let j = i+1; j<=i+hd && j<n; j++) {
            recursion(j, river, hd, n, animations, curr, ans);
        }
        curr.arr.pop();
        curr.len -= river[i];
    }
}

export const BruteForce = (river, hd) => {
    const n = river.length;
    const animations = new Array();
    const curr = {arr: [], len:0};
    const ans = {arr: new Array(), len:5000};
    recursion(0, river, hd, n, animations, curr, ans);
    return [animations, [...ans.arr]];
}
