<?php

namespace App\Controller;

use App\Entity\Groups;
use App\Form\GroupsType;
use App\Repository\GroupsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Security\User\JWTUser;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/groups", name="app_groups_")
 */
class GroupsController extends AbstractController
{
    /**
     * @Route("/list", name="app_groups")
     */
    public function index(Request $request): Response
    {
        $Authorization = $request->headers->get('Authorization');

        //dd($request->headers);

        return $this->json($request->headers);
    }

    /**
     * @Route("/add", name="app_groups")
     */
    public function add(Request $request, EntityManagerInterface $entityManager): Response
    {
        $group = new Groups;

        $data = json_decode($request->getContent(), true);

        $form = $this->createForm(GroupsType::class, $group);
        $form->handleRequest($request);

        $group->setName($data['name'])
        ->setNbPerson($data['nbPerson'])
        ->setAdministrator($data['admin']);

        $entityManager->persist($group);
        $entityManager->flush();

        //dd($request->headers);

        return $this->json('ok');
    }
}
