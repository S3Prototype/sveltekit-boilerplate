<script>
  export let data;
</script>


<ul>
	{#each data.posts as post}
  <li>{post.title}</li>
	{/each}
</ul>