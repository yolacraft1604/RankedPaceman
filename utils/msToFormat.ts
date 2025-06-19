export const msToFormat = (ms: number | undefined):string => {
    if(!ms) return '00:00';
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');
    return `${paddedMinutes}:${paddedSeconds}`;
}

export const splitToIndex = (s:string):number => {
    switch (s){
        case 'story.enter_the_nether': return 1;
        case 'nether.find_bastion': return 2;
        case 'nether.find_fortress': return 3;
        case 'projectelo.timeline.blind_travel': return 4;
        case 'story.follow_ender_eye': return 5;
        case 'story.enter_the_end': return 6;
    }
    return -1;
}