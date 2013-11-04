//Enter domain of site to search.
var domainroot="http://ec2-54-200-98-87.us-west-2.compute.amazonaws.com"

function search(curobj){
   curobj.q.value="site:"+domainroot+" "+curobj.qfront.value
}
