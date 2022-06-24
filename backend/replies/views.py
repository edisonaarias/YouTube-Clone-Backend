from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['Get'])
def replies_list(request):

    return Response('ok')