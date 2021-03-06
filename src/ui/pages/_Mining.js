import { BalanceCard, CpusCard, GpusCard, HashRateCard } from '../components/cards';
import React, { PureComponent } from 'react';

import { Actions } from '../components/actions';
import { Dialogs } from '../components/dialogs';
import { Grid } from '../components/generic';
import { Notifications } from '../components/notifications';
import { PageLayout } from '../layouts';

class MiningPage extends PureComponent {
  render() {
    return (
      <PageLayout>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Actions />
          </Grid>
          <Grid item xs={2}>
            <CpusCard />
          </Grid>
          <Grid item xs={2}>
            <GpusCard />
          </Grid>
          <Grid item xs={3}>
            <HashRateCard />
          </Grid>
          <Grid item xs={5}>
            <BalanceCard />
          </Grid>
        </Grid>
        <Notifications />
        <Dialogs />
      </PageLayout>
    );
  }
}

export { MiningPage };
