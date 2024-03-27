'use client'

import ReportIcon from '@/assets/svgs/ReportIcon'
import { Box, Button, Container, Grid } from '@mui/material'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>

      <div className={styles.placeholder}>banner goes here</div>
      <Container
        maxWidth='lg'
        classes={{
          root: styles.mainContainer,
        }}
      >
        <Grid
          container
          classes={{
            root: styles.container,
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            classes={{
              root: styles.bannerBgWrapper,
            }}
          >
            <ReportIcon />
            <Box>
              <p> Next Step</p>
              <h6>Expert Report</h6>
            </Box>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={8}
            classes={{
              root: styles.ctaContainer,
            }}
          >
            <Grid
              item
              xs={12}
              md={8}
              gap={2}
              classes={{ root: styles.contentWrapper }}
            >
              <p>
                Please get in touch if you would like an expert report for this
                site. Benefits include:
              </p>
              <ul>
                <li> Key insights from our expert team</li>
                <li>An in-depth analysis of the site</li>
                <li>Recommendations of next steps to take</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={3.5}>
              <Button
                variant='contained'
                classes={{
                  contained: styles.ctaButton,
                }}
              >
                Get in Touch
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}
