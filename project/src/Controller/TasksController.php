<?php

namespace App\Controller;

use App\Entity\Tasks;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/tasks", name="app_tasks_")
 */
class TasksController extends AbstractController
{
    /**
     * @Route("/list", name="app_tasks")
     */
    public function index(): Response
    {
        return $this->render('tasks/index.html.twig', [
            'controller_name' => 'TasksController',
        ]);
    }

    /**
     * @Route("/add", name="app_tasks")
     */
    public function add(Request $request, EntityManagerInterface $entityManager): Response
    {
        $task = new Tasks;

        $data = json_decode($request->getContent(), true);

        $form = $this->createForm(GroupsType::class, $task);
        $form->handleRequest($request);

        $task->setName($data['name'])
        ->setCount($data['count']);

        $entityManager->persist($task);
        $entityManager->flush();

        return $this->json('ok');
    }
}
