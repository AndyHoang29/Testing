<script>
import { Pie, mixins} from 'vue-chartjs';
const { reactiveProp } = mixins
export default {
    extends: Pie,
    props: {
        chartData: {
            type: Object,
            default: null
        },
        options: {
             type: Object,
            default: null
        }
    },
    mounted(){
        //this.chartData is created in the mixin
        //if you want to pass options -> create a local options object
        this.renderChart(this.chartData, this.options)
    }
}

</script>


