function! ChromeStart()
  let g:chrome_rpc_id = jobstart(['node', 'index.js'], {'rpc': v:true, 'on_stderr': 'ChromeMsgHandler'})
endfunction

function! ChromeMsgHandler(job_id, data, event)
  if a:event == 'stderr'
    :echom 'Chrome Debugger Error: '.join(a:data)
  endif
endfunction

function! ChromeWsStop()
  call rpcnotify(g:chrome_rpc_id, '_CR_WS_STOP')
endfunction

function! ChromeDump()
  call rpcnotify(g:chrome_rpc_id, '_CR_DUMP')
endfunction

command! ChromeStart call ChromeStart()
