'use client'

import ReportIcon from '@/assets/svgs/ReportIcon'
import { ContactFormDialog } from '@/components/ContactFormDialog'
import { Box, Button, Container, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false)
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)

  useEffect(() => {
    const IS_MSG_SENT =
      typeof window !== 'undefined' ? localStorage.getItem('is-msg-sent') : ''

    setIsMessageSent(IS_MSG_SENT === 'true')
  }, [])

  const handleOpenDialog = () => {
    if (!isMessageSent) {
      setIsOpenDialog(true)
    }
  }

  const handleFormSubmit = () => {
    localStorage.setItem('is-msg-sent', 'true')
    setIsMessageSent(true)
  }

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
            md={3.8}
            classes={{
              root: styles.bannerBgWrapper,
            }}
          >
            <ReportIcon />
            <Box>
              <p> Next Step</p>
              <h6>
                {isMessageSent ? 'Expert Report Requested' : 'Expert Report'}
              </h6>
            </Box>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={8.2}
            classes={{
              root: styles.ctaContainer,
            }}
          >
            <Grid
              item
              xs={12}
              md={8}
              gap={1}
              classes={{ root: styles.contentWrapper }}
            >
              {isMessageSent ? (
                <p>
                  We received your messge. Please feel free to get in touch
                  again if you would like to include any further details or ask
                  any other questions. We are eager to assist you.
                </p>
              ) : (
                <>
                  <p>
                    Please get in touch if you would like an expert report for
                    this site. Benefits include:
                  </p>
                  <ul>
                    <li> Key insights from our expert team</li>
                    <li>An in-depth analysis of the site</li>
                    <li>Recommendations of next steps to take</li>
                  </ul>
                </>
              )}
            </Grid>
            <Grid item xs={12} md={3.7}>
              <Button
                variant='contained'
                classes={{
                  contained: styles.ctaButton,
                }}
                onClick={handleOpenDialog}
              >
                {isMessageSent ? 'Send another message' : ' Get in Touch'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <ContactFormDialog
        open={isOpenDialog}
        onClose={() => setIsOpenDialog(false)}
        onFormSubmitted={handleFormSubmit}
      />
    </main>
  )
}
