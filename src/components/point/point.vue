<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="47" height="47" viewBox="0 0 47 47" version="1.1" id="point">
        <g id="Canvas" fill="none">
            <g id="Point Copy 6">
                <g id="Rectangle 2">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M 29.8205 2.5L 2.5 2.5L 2.5 29.8205L 29.8205 29.8205L 29.8205 2.5Z"
                        stroke-width="5" stroke-miterlimit="8"
                        transform="matrix(0.707107 0.707107 -0.707107 0.707107 23.3047 0.874512)"
                        />
                </g>
                <g id="Rectangle 2 Copy">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M 10.4244 2.5L 2.5 2.5L 2.5 10.4244L 10.4244 10.4244L 10.4244 2.5Z"
                        stroke-width="5"
                        stroke-miterlimit="8"
                        transform="matrix(0.707107 0.707107 -0.707107 0.707107 23.3047 24.5896)"
                        />
                </g>
            </g>
        </g>
    </svg>
</template>

<script>
export default {
  name: 'point',
};
</script>

<style lang="scss" scoped>
    #point {
        stroke: #fff;
        transition: all 0.35s;

        &:hover {
            stroke: #afa900;
        }
    }
</style>
