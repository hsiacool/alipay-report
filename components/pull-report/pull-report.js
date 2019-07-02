Component({
  props: {
    topText: '',
    bottomText:'',
    type:'',
    count:'',
    onClickMe: () => {},
  },

  methods: {
    onClickMe() {
      this.props.onClickMe();
    },
  },
});
