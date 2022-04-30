import { makeStyles } from "@material-ui/core";
export default makeStyles({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        backgroundColor: 'black',
        opacity: 0.7
      },
      header: {
          textDecoration: 'none',
          color: 'white'
      },
      logoutHeader: {
          display: 'flex',
          flexDirection: 'row',
      },

      logoutBtn: {
        marginLeft: 20
      }
})
