import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/startup/main/index.js',
    output: {
      file: 'dist/production/main.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'), // needed by react
        'process.env.__APP_PATH__': JSON.stringify(
          `${process.cwd()}/dist/production`.replace(/\\/g, '/')
        ),
        'process.env.__LISTEN_TO_FILES__': JSON.stringify(['main.js']),
        'process.env.__TRACKING_ID__': JSON.stringify('UA-115959266-2')
      }),
      nodeResolve({
        module: true,
        jsnext: true,
        browser: true,
        preferBuiltins: false
      }),
      commonjs({
        include: ['node_modules/**'],
        namedExports: {
          'node_modules/react/index.js': [
            'Component',
            'PureComponent',
            'Children',
            'createElement',
            'Fragment',
            'cloneElement',
            'isValidElement'
          ],
          'node_modules/@material-ui/core/styles/index.js': [
            'MuiThemeProvider',
            'createMuiTheme',
            'withStyles',
            'withTheme',
            'createGenerateClassName',
            'jssPreset'
          ],
          'node_modules/@material-ui/core/Modal/index.js': ['ModalManager'],
          'node_modules/@material-ui/core/Card/index.js': [
            'CardActions',
            'CardContent',
            'CardHeader'
          ],
          'node_modules/@material-ui/core/Dialog/index.js': [
            'DialogActions',
            'DialogContent',
            'DialogContentText',
            'DialogTitle'
          ],
          'node_modules/@material-ui/core/Table/index.js': [
            'TableBody',
            'TableRow',
            'TableCell',
            'TableHead'
          ],
          'node_modules/@material-ui/core/FormControl/index.js': ['FormControl'],
          'node_modules/@material-ui/core/FormHelperText/index.js': ['FormHelperText'],
          'node_modules/@material-ui/core/Input/index.js': ['InputLabel', 'InputAdornment'],
          'node_modules/@material-ui/core/Menu/index.js': ['MenuItem'],
          'node_modules/@material-ui/core/CircularProgress/index.js': ['CircularProgress']
        }
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      terser()
    ]
  }
];
