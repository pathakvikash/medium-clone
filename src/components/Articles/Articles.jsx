'use client';
import React from 'react';
import './Articles.css';
import { Typography, Button, IconButton } from '@mui/material';
import { Bookmark } from '@mui/icons-material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Articles = ({ item }) => {
  const {
    isPublised,
    publicationStart,
    publication,
    isPinned,
    articleHeader,
    articleBody,
    tag,
    readStat,
  } = item;
  return (
    <div className='articles'>
      <div className='articles__header'>
        {isPublised && (
          <>
            <Typography variant='body2' sx={{ marginRight: '8px' }}>
              {publicationStart}
            </Typography>
            <strong style={{ marginRight: '8px', fontSize: '0.875rem' }}>
              {publication}
            </strong>
          </>
        )}
        {isPinned && (
          <Typography
            variant='body2'
            sx={{
              color: 'rgba(117, 117, 117, 1)',
              fontSize: '0.875rem',
              fontWeight: '400',
            }}
          >
            Pinned
          </Typography>
        )}
      </div>
      <div className='articles__body'>
        <Typography
          variant='body1'
          sx={{
            fontSize: '1.5rem',
            color: 'rgba(41,41, 41, 1)',
            fontWeight: '800',
          }}
        >
          {articleHeader}
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: '1rem',
            color: 'rgba(41,41, 41, 1)',
            fontWeight: '400',
            margin: '12px 0px',
          }}
        >
          {articleBody}
        </Typography>
      </div>
      <div className='articles__footer'>
        <div className='articles__footer__leftpanel'>
          <Button
            variant='outlined'
            sx={{
              color: 'rgba(41, 41, 41, 1)',
              textTransform: 'inherit',
              fontSize: '0.875rem',
              backgroundColor: 'rgba(242, 242, 242, 1)',
              borderRadius: '999px',
              marginRight: '8px',
              border: 'none',
              '&:hover': {
                border: 'none',
                backgroundColor: 'rgba(230, 230, 230, 1)',
              },
            }}
          >
            {tag}
          </Button>
          <Typography
            variant='caption'
            sx={{
              fontSize: '0.875rem',
              color: 'rgb(117,117, 117)',
              fontWeight: '300',
              margin: '12px 0px',
            }}
          >
            {readStat}
          </Typography>
        </div>
        <div className='articles__footer__rightpanel'>
          <IconButton>
            <Bookmark />
          </IconButton>
          <IconButton>
            <MoreHorizOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Articles;
