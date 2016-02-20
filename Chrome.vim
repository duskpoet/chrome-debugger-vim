function! ChromeStart()
    let g:chrome_rpc_id = rpcstart('node', ['index.js'])
endfunction
