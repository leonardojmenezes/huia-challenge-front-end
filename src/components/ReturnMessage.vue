<template>
    <div :class="{ 'active': isActive, 'success': isSuccess }" id="return-message">
        <p>{{ message }}</p>
    </div>
</template>
<script>
    export default {
        name: 'returnMessage',
        data() {
            return {
                message: '',
                isActive: false,
                isSuccess: false
            };
        }
    }
</script>
