// dateUtils.ts

 function timeDiff(creatAt: string) {
    const postDate = new Date(creatAt);
    const now = Date.now();

    const diffInSeconds = (now - postDate.getTime()) / 1000;

    if (diffInSeconds >= 86400) { // 86400 seconds = 1 day
        return Math.floor(diffInSeconds / 86400) + "d";
    } else if (diffInSeconds >= 3600) { // 3600 seconds = 1 hour
        return Math.floor(diffInSeconds / 3600) + "h";
    } else if (diffInSeconds >= 60) { // 60 seconds = 1 minute
        return Math.floor(diffInSeconds / 60) + "m";
    } else {
        return diffInSeconds.toFixed(0) + "s";
    }
}

export {timeDiff}
