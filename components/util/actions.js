export const commentType = ( comment ) => {
  switch (comment.nodeTypeString) {
    case 'Comment':
      return 'commented on the idea'
      break;
    case 'Idea':
      return 'posted an idea'
      break;
    case 'Reply':
      return 'replied to a comment on the idea'
      break;
    default:
      return '';
  }
}

export const timeDiff = ( comment ) => {
  let time = new Date() - comment.postDate;

  const milSecondsInYear = 1000 * 60 * 60 * 24 * 365;

  const intervals = [
    {type: 'year', val: Math.floor(time/milSecondsInYear)},
    {type: 'month', val: Math.floor(time/(milSecondsInYear/12))},
    {type: 'day', val: Math.floor(time/(86400*1000))},
    {type: 'hour', val: Math.floor(time/(3600*1000))%24},
    {type: 'minute', val: Math.floor(time/(60*1000))%60},
    {type: 'second', val: Math.floor(time/1000)%60},
  ];

  for(let i = 0; i < intervals.length; i++){
    if(intervals[i].val >= 1){
      let isPlural = intervals[i].val > 1 ? 's' : '';

      return `${intervals[i].val} ${intervals[i].type}${isPlural} ago`
    }
  }

  return '';

}
