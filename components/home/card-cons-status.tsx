import { Progress, Grid, Text } from "@nextui-org/react";

export default function ConstructionStatus() {
    const nomalConnect = 60;
  return (
    <Grid.Container xs={12} sm={12}>
        <Grid xs={12} sm={12}>
            <Text h6 >Tổng số: 74</Text>
        </Grid>
        <Grid xs={12} sm={12} css={{py: 10, display: 'block !important'}}>
            <Text h6 >Trạm kết nối bình thường: 0</Text>
            <Progress size={'md'} color="success" shadow value={nomalConnect} max={74}  />
        </Grid>
        <Grid xs={12} sm={12} css={{py: 10, display: 'block !important'}}>
            <Text h6 >Trạm mất kết nối: 73</Text>
            <Progress size={'md'} color="warning" shadow value={73} max={74} />
        </Grid>
        <Grid xs={12} sm={12} css={{py: 10, display: 'block !important'}}>
            <Text h6 >Trạm vận hành chưa đúng: 1</Text>
            <Progress size={'md'} color="error" shadow value={1} max={74} />
        </Grid>
    </Grid.Container>
  );
}
