<template>
    <section id="max-doctor">
        <headerMDoctor></headerMDoctor>
        <formMDoctor></formMDoctor>
        <footerMDoctor></footerMDoctor>
    </section>
</template>
<script>

    import HeaderMDoctor from '../components/HeaderMDoctor.vue';
    import FormMDoctor from '../components/FormMDoctor.vue';
    import FooterMDoctor from '../components/FooterMDoctor';

    export default {
        name: 'formMaxDoctor',
        components: {
            HeaderMDoctor,
            FormMDoctor,
            FooterMDoctor
        }
    }

</script>
