import React from 'react';

const InboxListItems = [
   {
      key: 'about',
      primaryText: 'About',
      leftIcon: <i className="fa fa-chess-king"></i>,
      active: true,
   },
   {
      key: 'resume',
      primaryText: 'Resumé',
      leftIcon: <i className="fa fa-file-alt"></i>,
   },
   {
      key: 'apps',
      primaryText: 'Apps',
      leftIcon: <i className="fa fa-th"></i>,
   },
   {
      key: 'code',
      primaryText: 'Code',
      leftIcon: <i className="fa fa-code"></i>,
   },
   {
      key: 'photos',
      primaryText: 'Photos',
      leftIcon: <i className="fa fa-image"></i>,
   },
];

export default InboxListItems;
