var columns: [
  ...
  {
    property: 'followers',
    header: 'Followers',
    // accuracy per hundred is enough for demoing
    formatter: followers => followers - (followers % 100)
  },
  {
    property: 'worksWithReactabular',
    header: '1st Class Reactabular',
    // render utf ok if works
    formatter: works => works && <span>&#10003;</span>
  }
];