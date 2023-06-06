import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartLicenseProps {
    chartId: string;
  }

  
const ChartLicense: React.FC<ChartLicenseProps> = ({ chartId }) => {
    const options: ApexOptions = {
        series: [100, 200],
        labels: ['BTNMT', 'UBND'],
        legend: {
          show: false
        },
        colors: ['#32abda', '#e5963e'],
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '15px',
          },
          formatter: function (val: any, opt: any): string {
            const name = opt.w.globals.labels[opt.seriesIndex];
            const value = opt.w.globals.seriesTotals[opt.seriesIndex];
            return `${name}: ${value}`;
          },
        },
        chart: {
          type: 'pie',
          events: {
            click: function (event: any, chartContext: any, config: any) {
              const name = config.config.labels;
            //   if (name[0] == 'BTNMT') {
            //     window.location.href = '/giay-phep?bo-cap';
            //   } else {
            //     window.location.href = '/giay-phep?tinh-cap';
            //   }
            },
          },
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -30,
            },
          },
        },
      };      
  
    return (
      <ApexCharts options={options} series={options.series} type="pie" width={200} height={200} />
    );
  };
  
  export default ChartLicense;
  