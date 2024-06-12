module.exports =`
<div v-if="isHtml" v-html="getElementHtml"></div>
<div v-else>{{rawValue}}</div>
`;