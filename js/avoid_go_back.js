    var current_url = window.location.href;
    var max_index = 100;
    var current_state = history.state;
    if (!current_state) {
        for (let i = 1; i <= max_index; i++) {
            history.pushState({page: i}, null, current_url);
        }
    }
    console.log(current_state.page);
    if(current_state.page !== max_index){
        history.go(max_index);
        history.location.href = current_url;
    }
    window.addEventListener('popstate', function() {
        history.go(max_index);
    });
