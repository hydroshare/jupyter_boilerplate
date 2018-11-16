define({
    'name' : 'hydroshare',
    'sub-menu' : [
        {
            'name' : 'Create New Resource',
            'snippet' : [
                "from utilities import hydroshare",
                "hs = hydroshare.hydroshare()",
                "",
                "abstract = 'This is a demo of the HydroShare Python Notebook Server'",
                "title = 'Hello From JupyterHub'",
                "keywords = ['Demo', 'JupyterHub'] ",
                "rtype = 'genericresource'",
                "files = ['files', 'to', 'include']",
                "",
                "# create the new resource",
                "resource_id = hs.createHydroShareResource(abstract,",
                "                                          title,",
                "                                          keywords=keywords,",
                "                                          resource_type=rtype,",
                "                                          content_files=files,",
                "                                          public=False)",
            ],
        },
    ],
});
