<template>
    <form @submit.prevent="sendData()" id="form-max-doctor">
        <returnMessage ref="message"></returnMessage>
        <div class="form_fields">
            <div class="field">
                <label>CRM</label>
                <input type="text" v-model="crm" placeholder="0000000" required />
            </div>
            <div class="field">
                <label>UF</label>
                <div class="uf_data" v-if="ufData.length > 0">
                    <select v-model="ufSelected" required>
                        <option value="" disabled selected>Selecionar</option>
                        <option v-for="uf in ufData" :key="uf.id" :value="uf.id">
                            {{ uf.sigla }} - {{ uf.nome }}
                        </option>
                    </select>
                </div>
                <div class="uf_data" v-else>
                    <span>Carregando...</span>
                </div>
            </div>
            <div class="field">
                <input type="submit" class="button_style" value="Continue" />
            </div>
            <p class="disclaimer">Canal de compra exclusivo para classe médica</p>
        </div>
    </form>
</template>
<script>

    import axios from 'axios';
    import ReturnMessage from './ReturnMessage.vue';

    export default {
        name: 'formMDoctor',
        components: {
            ReturnMessage,
        },
        data() {
            return {
                crm: null,
                ufSelected: '',
                ufData: [],
                emptyData: 'Nenhum dado encontrado.'
            };
        },
        mounted() {
            this.getUF();
        },
        methods: {
            getUF() {

                const vm = this;
      
                axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
                    vm.ufData = response.data;
                }).catch(error => {
                    console.log(error);
                });

            },
            sendData() {

                const vm = this;
                const vmReturnMessage = vm.$refs.message;

                vmReturnMessage.isActive = true;

                if (vm.crm.length < 5) {
                    vmReturnMessage.isSuccess = false;
                    vmReturnMessage.message = 'O CRM precisa ter ao menos 5 caracteres';
                } else {
                    vmReturnMessage.isSuccess = true;
                    vmReturnMessage.message = 'Sucesso';
                }

                setTimeout(()=>{
                    vmReturnMessage.isActive = false;
                }, 3000);

            }
        }
    }

</script>
