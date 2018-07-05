<template>
	<div class="content">
		<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-gXIBGwppFM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
</template>

<script>
export default {
	name: 'video-modal'
};
</script>

<style scoped>
    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        height: 80%;
        color: #fff;
        overflow: hidden;
        z-index: 20;
    }
</style>
