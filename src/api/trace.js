import {service} from "@/util/http";

export const listTrace = (data) => {
    const url = `simpleAgentLog/listTrace`
    return service.post(url, data)
}

export const traceEntryTreeView = (traceId) => {
    const url = `simpleAgentLog/traceEntryTreeView?traceId=` + traceId
    return service.get(url, traceId)
}

export const traceExitTreeView = (traceId) => {
    const url = `simpleAgentLog/traceExitTreeView?traceId=` + traceId
    return service.get(url, traceId)
}
