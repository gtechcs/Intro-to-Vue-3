app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
  /*html*/
  `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <br/>
        "{{ review.review }}"
        <br/>
        <p v-if="review.recommend == 'Yes'">It is recommended</p>
        <br/>
      </li>
    </ul>
  </div>
  `
})