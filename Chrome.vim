function! ChromeStart()
    let g:chrome_rpc_id = jobstart(['node', 'index.js'], {'rpc': v:true})
endfunction
