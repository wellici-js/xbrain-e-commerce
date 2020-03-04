import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      minHeight: 290
    },
    media: {
      maxHeight: 120,
      objectFit: "contain"
    },
    name: {
      fontsize: 10
    },
    actions: {
      marginBottom: 0
    },
    add: {
      backgroundColor: '#019cdf',
      width: 150,
      height: 32,
      textAlign: 'center',
      alignSelf: 'center',
      paddingTop: 5
    }
  });

  export default useStyles;