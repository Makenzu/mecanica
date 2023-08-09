const ContType = 'Content-Type';

export const ContTypeApp =  
    {
        ediX12:             {ContType: 'application/EDI-X12'},
        ediFact:            {ContType: 'application/EDIFACT'},
        javascript:         {ContType: 'application/javascript'},
        octetStream:        {ContType: 'application/octet-stream'},
        ogg:                {ContType: 'application/ogg'},
        pdf:                {ContType: 'application/pdf'},
        xhtmlXml:           {ContType: 'application/xhtml+xml'},
        xShockwaveFlash:    {ContType: 'application/x-shockwave-flash'},
        json:               {ContType: 'application/json'},
        ldJson:             {ContType: 'application/ld+json'},
        xml:                {ContType: 'application/xml'},
        zip:                {ContType: 'application/zip'},
        xWwwFormUrlencoded: {ContType: 'application/x-www-form-urlencoded'}
    };
export const ContTypeAud =
    {
        mpeg:               {ContType: 'audio/mpeg'},
        xMsWma:             {ContType: 'audio/x-ms-wma'},
        vndRnRealaudio:     {ContType: 'audio/vnd.rn-realaudio'},
        xWav:               {ContType: 'audio/x-wav'}
    }
export const ContTypeImg =
    {
        gif:                {ContType: 'image/gif'},
        jpeg:               {ContType: 'image/jpeg'},
        png:                {ContType: 'image/png'},
        tiff:               {ContType: 'image/tiff'},
        vndMicrosoftIcon:   {ContType: 'image/vnd.microsoft.icon'},
        xIcon:              {ContType: 'image/x-icon'},
        vndDjvu:            {ContType: 'image/vnd.djvu'},
        svgXml:             {ContType: 'image/svg+xml'}
    }
export const ContTypeMul =
    {
        mixed:              {ContType: 'multipart/mixed'},
        alternative:        {ContType: 'multipart/alternative'},
        related:            {ContType: 'multipart/related'},    // (using by MHTML (HTML mail).)
        formData:           {ContType: 'multipart/form-data'}
    }